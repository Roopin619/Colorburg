export default {
    up() {

    },
    down(size) {
        const sizes = {
            xs: "575.98px",
            sm: "767.98px",
            md: "1100px",
            lg: "1400px",
            xl: "2000px"
        }
        return `@media (max-width: ${sizes[size]})`;
    }
}