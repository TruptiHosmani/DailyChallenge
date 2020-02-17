import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { recipesQuery } from '../queries/getRecipesQuery'

export default class Recipes extends Component {
    state = {
        vegetarian: false,
    }
    updateVegetarian = () => {
        this.setState({ vegetarian: !this.state.vegetarian })
    }
    render() {


        return (
            <div>
                <h2> Recipes!</h2>
                <label>
                    <input
                        checked={this.state.vegetarian}
                        type="checkbox"
                        onChange={this.updateVegetarian}
                    /> vegetarian
                </label>
                <Query
                    query={recipesQuery} variables={{ vegetarian: this.state.vegetarian }}>
                    {({ data, loading, error }) => {

                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Something went wrong</p>;
                        return (
                            <ul>
                                {data.recipes.map(({ id, title }) => {
                                    return <li key={id}>{title}</li>
                                })}
                            </ul>
                        )
                    }}
                </Query>

            </div >
        );
    }
}

