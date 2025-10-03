import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList as getProductsList } from "@/services/product";
import { selectList as selectProductsList } from "@/features/product";

/**
 *
 */
export const useFetchProductsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsList());
    }, [dispatch]);
};

/**
 *
 */
export const useProductsList = () => {
    const products = useSelector(selectProductsList);

    return products;
};
