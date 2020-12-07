import { GET_DATA, INITIAL_VIDEOS, SEARCH_VIDEO_BY_VOICE, SET_VIDEO_LIST, HIDEL_VIDEO, CLEAN } from "../actiontypes";
import { initialstate } from "./initialstate";
import SimpleToast from 'react-native-simple-toast'
export const reducer = (state = initialstate, action) => {
    console.log('Reducer ', action, ' state ', state)
    switch (action.type) {
        case GET_DATA: {
            const newdata = { ...state, Alldata: [...action.payload] };
            console.log('Reducer ', action, ' newstate ', newdata);
            return newdata
        }
        case SET_VIDEO_LIST: {
            const newState = { ...state, videoList: [...action.payload] };
            console.log('Reducer ', action, ' newstate ', newState);
            return newState;
        }
        case SEARCH_VIDEO_BY_VOICE: {
            const searchQuery = action.payload;
            let match='' , hidelvideo = state.videoListById.hidelvideo;
            for (var query of searchQuery.value) {
                match = state.videoListById.data.find(el => query.includes(el.title));
                if (match) {
                    console.log('Match found ', match);
                    break;
                } else {
                    SimpleToast.show('My Questions are limited')
                }
            } // end of for
            return { ...state, videoURL: match === undefined? hidelvideo: match.videolink, repete: false }
        }
        case INITIAL_VIDEOS: {
            const newvideo = action.payload;
            let findid = []
            findid = state.videoList.find(el => el.id == newvideo)

            if (findid) {
                console.log('findbyid ', findid);
            }
            return { ...state, videoListById: findid, videoURL: findid.initialvideo }
        }
        case HIDEL_VIDEO: {
            return { ...state, videoURL: state.videoListById.hidelvideo, repete: true }
        }
        case CLEAN: {
            return { ...state, repete: false }
        }
        default: return state;
    }
}