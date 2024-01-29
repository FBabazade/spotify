import React, { useEffect, useMemo } from "react";
import { Icon } from "../../assets/icons";
import { useAudio } from "react-use";
import { secondsToMinutes } from "../../service/utils";
import CustomRange from "./CustomRange";
import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../stores/player";

const Player = () => {
  const dispatch = useDispatch();

  const { current } = useSelector((state) => state?.player);
  const [audio, state, controls] = useAudio({
    src: current?.src,
  });
  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeMedium";
    if (state.volume >= 0.66 && state.volume < 1) return "volumeFull";
    return "volumeFull";
  }, [state?.volume, state?.muted]);

  return (
    <div className="flex flex-row p-4 justify-between items-center">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        {current && (
          <div className="flex items-center">
            {" "}
            <div className="w-14 h-14 mr-2 ">
              <img
                className="rounded object-cover"
                src={current.img}
                alt="img"
              />
            </div>
            <div className="w-[30%]">
              <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold line-clamp-1">
                {current.title}
              </h6>
              <p className="text-link whitespace-normal mt-1 overflow-hidden text-[12px] text-ellipsis line-clamp-1">
                {current.desc}
              </p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="heart" size={16} />
        </button>
          </div>
         
        )}
      </div>
      <div className="max-w-[33.375rem] w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="mix" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            {" "}
            <Icon name="prev" size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center text-black text-opacity-70 hover:text-opacity-100 hover:scale-[1.05] bg-link rounded-full"
          >
            {" "}
            <Icon name={state?.playing ? "pause" : "play"} size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            {" "}
            <Icon name="next" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="reload" size={16} />
          </button>
        </div>

        <div className="w-full flex items-center gap-x-2">
          <div className="text-xs text-white text-opacity-70">
            {secondsToMinutes(state?.time)}
          </div>
          {audio}
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-xs text-white text-opacity-70">
            {secondsToMinutes(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="nowplaying" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="connect" size={16} />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="w-[5.8rem] max-w-full ">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
