import React, { useCallback, useEffect } from "react";
import { StyledFormContainer } from "./style";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from "react-hook-form";

import { useRequest } from "../../providers/requestData";
import { useResult } from "../../providers/results";
import Api from "../../api";
import { currencyMask, installmentsMask, mdrMask } from "../StyledInput/masks";

const AntecipationForm = () => {
  const { request, setRequest } = useRequest();
  const { results, setResults } = useResult();

  const schema = yup.object().shape({
    amount: yup
      .string()
      .required("Campo requerido")
      .min(8, "O valor mínimo é de R$1000,00"),
    installments: yup.string().required("Digite o número de parcelas!"),
    mdr: yup
      .string()
      .required("MDR deve ser informado")
      .min(1, "MDR deve ser acima de 0"),
  });
  useEffect(() => {
    request.amount &&
      request.installments &&
      request.mdr &&
      Api.post("/", request).then((res) => setResults(res.data));
  }, [request]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>, mask: string) => {
      if (mask === "currency") {
        currencyMask(e);
      } else if (mask === "mdr") {
        mdrMask(e);
      } else if (mask === "installments") {
        installmentsMask(e);
      } else {
        return e;
      }
    },
    []
  );

  const handleAntecipation = ({ mdr, installments, amount }: FieldValues) => {
    console.log(mdr, installments, amount);
    setRequest({
      ...request,
      ...{
        amount: amount.replace(/\D/g, ""),
        mdr: mdr.replace(",", "."),
        installments,
      },
    });
  };

  return (
    <StyledFormContainer>
      <h2>Simule sua Antecipação</h2>
      <form onSubmit={handleSubmit(handleAntecipation)}>
        <label htmlFor="Amount" className="selling__container">
          <span className="label">Informe o valor da venda*</span>
          <div className="input--container">
            <span className="prefix">R$</span>
            <input
              {...register("amount")}
              onKeyUp={(e) => handleKeyUp(e, "currency")}
            />
          </div>
          {errors.amount && (
            <span className="error--span">{String(errors.amount.message)}</span>
          )}
        </label>
        <label className="parcels__container">
          <span className="label">Em quantas parcelas*</span>
          <div className="input--container">
            <span className="prefix">Parc.</span>
            <input
              {...register("installments")}
              max="12"
              onKeyUp={(e) => handleKeyUp(e, "installments")}
            />
          </div>
          <span>Máximo de 12 parcelas</span>
          {errors.installments && (
            <span className="error--span">
              {String(errors.installments.message)}
            </span>
          )}
        </label>
        <label className="MDR_container">
          <span className="label">Informe o percentual de MDR*</span>
          <div className="input--container">
            <span className="prefix">MDR </span>
            <input
              {...register("mdr")}
              onKeyUp={(e) => handleKeyUp(e, "mdr")}
            />
          </div>
          {errors.mdr && (
            <span className="error--span">{String(errors.mdr.message)}</span>
          )}
        </label>
        <button type="submit" onClick={(e) => console.log(errors)}>
          Calculate
        </button>
      </form>
    </StyledFormContainer>
  );
};

export default AntecipationForm;
