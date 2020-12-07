import { GET_DATA, SEARCH_VIDEO_BY_VOICE, SET_VIDEO_LIST, INITIAL_VIDEOS, HIDEL_VIDEO, CLEAN } from "../actiontypes";

export const getdata = data => ({ type: GET_DATA, payload: data })
export const setVideoList = data => ({ type: SET_VIDEO_LIST, payload: data });
export const searchVideoByVoice = data => ({ type: SEARCH_VIDEO_BY_VOICE, payload: data });
export const initialVideo = data => ({ type: INITIAL_VIDEOS, payload: data })
export const hidelVideo = data => ({ type: HIDEL_VIDEO, payload: data })
export const clean = data => ({ type: CLEAN, payload: data })