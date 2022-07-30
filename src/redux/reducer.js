const initialValue = {
	products: [],
	cart: [],
	total: 0
}

const rootReducer = (state = initialValue, action) => {
	switch (action.type) {
		case "cart/store":
			return {
				...state,
				products: action.payload
			}
			break;
		case "cart/add":
			const index = state.cart.findIndex(product => product.id === action.payload.id)
			console.log(action.payload);
			if (index < 0) {
				return {
					...state,
					cart: [...state.cart, action.payload],
					total: state.total + action.payload.saleOffPrice
				}
			}
			if (index >= 0) {
				const newProduct = state.cart.map(product => {
					if (product.id === action.payload.id) {
						product.amount = product.amount + 1
						return product
					} else {
						return product
					}
				})

				return {
					...state,
					cart: newProduct,
					total: state.total + action.payload.saleOffPrice
				}
				break;
			}
		case "cart/decrease":
			const indexCart = state.cart.findIndex(product => product.id === action.payload)
			if (state.cart[indexCart].amount === 1) {
				return {
					...state
				}
			} else {
				const newCart = state.cart.map(product => {
					if (product.id === action.payload) {
						return {
							...product,
							amount: product.amount - 1
						}
					} else {
						return product
					}

				})
				return {
					...state,
					cart: newCart,
					total: state.total - state.cart[indexCart].saleOffPrice
				}
			}

		default:
			return state;
	}
}

export default rootReducer;