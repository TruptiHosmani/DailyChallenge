import React, { useState } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { recipesQuery } from '../queries/getRecipesQuery'
import { Form, Button } from 'react-bootstrap'
function AddRecipe(props) {
    const [recipeName, addRecipeName] = useState('')
    const [vegetarian, addVegetarian] = useState(false)

    const resetFields = () => {
        addRecipeName('')
        addVegetarian(false)
    }
    const addRecipeMutation = gql`
        mutation addRecipe($recipe: RecipeInput!){
        addRecipe(recipe: $recipe){
            id
            title
        }
    }`
    return (
        <Mutation
            mutation={addRecipeMutation}
            refetchQueries={[
                {
                    query: recipesQuery,
                    variables: { vegetarian: true }

                },
                {
                    query: recipesQuery,
                    variables: { vegetarian: false }

                }
            ]}
            awaitRefetchQueries={true}
        >
            {(addRecipe, { loading, error }) => (
                <Form onSubmit={evt => {
                    evt.preventDefault();
                    addRecipe({
                        variables: {
                            recipe: {
                                title: recipeName,
                                vegetarian: vegetarian
                            }
                        }
                    })
                    resetFields()
                }}>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" onChange={(e) => addRecipeName(e.target.value)} value={recipeName} />

                    </Form.Group >
                    <Form.Group >
                        <Form.Check type="checkbox" label='Vegetarian' placeholder="vegetarian" onChange={(e) => addVegetarian(e.target.value)} checked={vegetarian} />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Add Recipe</Button>
                    {loading && <p>Loading ...</p>}
                    {error && <p>Error :( plz try again</p>}

                </Form>

            )}
        </Mutation>
    );
}

export default AddRecipe;