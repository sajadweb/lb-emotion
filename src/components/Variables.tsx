// tslint:disable-next-line:no-namespace
declare namespace Variables {

    /**
     * @description it is props for button component
     */
    interface Color {
        primary?: boolean;
        secondary?: boolean;
        success?: boolean;
        info?: boolean;
        warning?: boolean;
        danger?: boolean;
        light?: boolean;
        dark?: boolean;
    }

    /**
     * @description it is props for button component
     */
    interface Base {
        bgColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
        borderColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    }

}
export default Variables;
