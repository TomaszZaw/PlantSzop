import { ref } from 'vue';

const trashItems = ref([]);

export function useTrashBin() {
    const addToTrashBin = (plant) => {
        const existingItem = trashItems.value.find(item => item.id === plant.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            trashItems.value.push({ ...plant, quantity: 1 });
        }
    };

    const removeFromTrashBin = (index) => {
        trashItems.value.splice(index, 1);
    };

    const incrementQuantity = (index) => {
        trashItems.value[index].quantity++;
    };

    const decrementQuantity = (index) => {
        if (trashItems.value[index].quantity > 1) {
            trashItems.value[index].quantity--;
        }
    };

    const getTrashItems = () => {
        return trashItems.value;
    };
    const getTotalValue = () => {
        return trashItems.value.reduce((total, item) => total + parseFloat(item.price.substring(0, item.price.length - 3)) * item.quantity, 0);
    };

    const getTotalQuantity = () => {
        return trashItems.value.reduce((total, item) => total + item.quantity, 0);
    };
    

    return {
        addToTrashBin,
        removeFromTrashBin,
        incrementQuantity,
        decrementQuantity,
        getTrashItems,
        getTotalValue,
        getTotalQuantity,
    };
}