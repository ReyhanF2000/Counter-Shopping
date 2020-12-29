import React from 'react';
import './App.css';
import Counter from './Components/Counter'
import Header from './Components/Header'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitState();
  }
  getInitState() {
    return {
      items: [
        { id: '1', value: 0 },
        { id: '2', value: 0 },
        { id: '3', value: 0 },
        { id: '4', value: 0 },
      ]
    }
  }
  handleReset = () => {
    this.setState(
      ({ items }) => {
        return {
          items: items.map(item => ({ ...item, value: 0 }))
        }
      })
  }

  handleRefresh = () => {
    this.setState(this.getInitState())
  }

  handleChange = (id, value) => {
    this.setState(({ items }) => {
      const index = items.findIndex(item => item.id === id)
      const newItems = [...items];
      newItems.splice(
        index,
        1,
        {
          ...items[index],
          value: items[index].value + value
        }
      );
      return {
        items: newItems
      }
    }
    )
  }
  handleDelete = (id) => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  render() {
    const { items } = this.state
    const itemslength = items.length
    console.log(itemslength)
    console.log({ items })
    const itemsCount = items.filter(item => item.value > 0).length
    return (<div className="App" >
      <Header itemsCount={itemsCount}
        onReset={this.handleReset}
        onRefresh={this.handleRefresh}
        len={itemslength}
        resetClass={3}
        refreshClass={4}
      />
      {
        items.map(item => {
          return (
            <Counter
              key={item.id}
              value={item.value}
              onInc={() => this.handleChange(item.id, +1)}
              onDec={() => this.handleChange(item.id, -1)}
              onDel={this.handleDelete.bind(this, item.id)}
              incClass={0}
              decClass={1}
              delClass={2}
            />
          )
        })
      }
    </div >)
  }
}
export default App;
