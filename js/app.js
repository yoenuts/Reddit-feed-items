//babel transpiles

const styles = {
    backgroundColor: '#222222',
    color: 'white',
}
const upstyle = {
    width:'40px',
    borderLeft: '4px solid transparent'
}
//ProductList is passing props to Product
class ProductList extends React.Component {
    render() {
        console.log("Here")
        const product = Seed.products[0];
        return (
            <div className="ui unstackable items">
                <Product 
                    id = {product.id}
                    title = {product.title}
                    //description = {Product.d}
                    url = {product.url}
                    votes = {product.votes}
                    submitterAvatar = {product.submitterAvatarURL}
                    productImage = {product.productImageUrl}
                />
            </div>
        );
    }
}


class Product extends React.Component {
    render(){
        return (
            <div className = "item" style = {styles}>
                <div className = 'image'>
                   <img src = {this.props.productImageUrl}></img>
                </div>
                <div className = 'middle aligned content'>
                    <div className = 'header'>
                        <a>
                            <i className = 'caret up icon'>
                            </i>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className = 'extra'>
                        <span>Submitted by: </span>
                        <img className="avatar image" src = {this.props.submitterAvatar}/>
                        <span>3 days ago</span>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
)