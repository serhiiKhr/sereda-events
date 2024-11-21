import {getTags} from "../api/api";

export const getTagsQuery = () => ({
    queryKey: ['TAGS'],
    queryFn: getTags
});
