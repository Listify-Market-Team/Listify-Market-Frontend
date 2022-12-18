import { View, Button } from "react-native";
import { useState } from "react";
import ListDataFields from "./ListDataFields";
import ProductsListSelection from "./ProductsListSelection";
import { useTranslation } from "react-i18next";

const stepsCount = 2;
export default function ListForm({ onSubmit }) {
  const [list, setList] = useState({ name: "", description: "" });
  const [products, setProducts] = useState([]);
  const [step, setStep] = useState(0);
  const isTheLastStep = stepsCount - 1 === step;
  const { t, i18n } = useTranslation();

  const submitHandler = () => {
    onSubmit({ ...list, products });
  };

  const nextStepHandler = () => {
    setStep(step => step + 1);
  };

  const previousStepHandler = () => {
    setStep(step => step - 1);
  };

  const addProduct = product => {
    setProducts(products => [...products, product]);
  };

  const removeProduct = id => {
    setProducts(products => products.filter(product.id !== id));
  };

  const changeNameHandler = name => {
    setList(list => ({ ...list, name }));
  };

  const changeDescriptHandler = descript => {
    setList(list => ({ ...list, description: descript }));
  };

  return (
    <View>
      {step === 0 && (
        <ListDataFields
          onChangeName={changeNameHandler}
          onChangeDescription={changeDescriptHandler}
        />
      )}
      {step === 1 && (
        <ProductsListSelection
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
          products={products}
          setProducts={products => setProducts(products)}
        />
      )}
      <View>
        <Button
          title={t("Volver")}
          onPress={previousStepHandler}
          disabled={step === 0}
        />
        {!isTheLastStep ? (
          <Button title={t("Siguiente")} onPress={nextStepHandler} />
        ) : (
          <Button title={t("Hecho")} onPress={submitHandler} />
        )}
      </View>
    </View>
  );
}
