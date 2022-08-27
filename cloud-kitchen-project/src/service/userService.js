import axios from "axios";

export const getUserLogin = ({ success, error, }) => {
    axios.get(`https://www.blibli.com/backend/product-detail/products/${itemSku}/description`)
        .then((response) => {
            console.info(response);
            success && success(response)
        }).
        catch((e) => {
            error && error(e)
        })
}