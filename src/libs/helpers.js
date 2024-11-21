export const get = (obj, path, defaultValue) => {
    const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key.length);
    const result = pathArray.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    return result === undefined ? defaultValue : result;
}
