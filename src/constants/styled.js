export const BREAKPOINTS = {
    mobile: 576,
    tablet: 768,
    desktop: 1200,
};
export const COLORS = {
    MAIN_BACKGROUND: '#131315',
    MAIN_FONT: '#FFFAFB',
    SECONDARY_FONT: '#797979',
    WARNING: '#FFBB33',
    SUCCESS: '#00CC66',
    ALERT: '#FF4E6B',
    INFO: '#4DB4FF',
}
export const getColor = (type) => {
    let color;

    switch (type) {
        case 'alert':
            color = COLORS.ALERT;
            break;
        case 'success':
            color = COLORS.SUCCESS;
            break;
        case 'warning':
            color = COLORS.WARNING;
            break;
        case 'info':
            color = COLORS.INFO;
            break;

        default:
            color = COLORS.WARNING;
    }

    return color;
}
