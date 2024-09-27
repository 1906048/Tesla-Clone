import React from 'react'
import  styled  from 'styled-components'
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section  
         modelName = "Model S"
         description = "Order online for Touchless Delivery"
         leftButtonText = "Custom Order"
         rightButtonText = "Existing Inventory"
         imageName = "model-s.jpg"
      />
      <Section
      modelName = "Model Y"
      description = "Order online for Touchless Delivery"
      leftButtonText = "Custom Order"
      rightButtonText = "Existing Inventory"
      imageName = "model-y.jpg"
      />
      <Section
      modelName = "Model 3"
      description = "Order online for Touchless Delivery"
      leftButtonText = "Custom Order"
      rightButtonText = "Existing Inventory"
      imageName = "model-3.jpg"
      />
      <Section
      modelName = "Model X"
      description = "Order online for Touchless Delivery"
      leftButtonText = "Custom Order"
      rightButtonText = "Existing Inventory"
      imageName = "model-x.jpg"
      />
      <Section
      modelName = "Lower cost sonal panel in America"
      description = "Money-back guarantee"
      leftButtonText = "Order Now"
      rightButtonText = "Learn More"
      imageName = "solar-panel.jpg"
      />
      <Section
      modelName = "Solar for new Roofs"
      description = "Solar roof costs less than a new roof"
      leftButtonText = "Order Now"
      rightButtonText = "Learn More"
      imageName = "solar-roof.jpg"
      />
      <Section
      modelName = "Accessories"
      description = ""
      leftButtonText = "Shop Now"
      imageName = "accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height : 100vh;
`