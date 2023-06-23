const getImagePath = (path) => {
    const base_path = "https://image.tmdb.org/t/p/w220_and_h330_face";
    return `${base_path}${path}`;
};

export { getImagePath };