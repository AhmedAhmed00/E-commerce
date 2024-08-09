import React, { useState } from "react";
import CounterBtn from "../../Components/CounterBtn";
import useUpdateCount from "./useUpdateCount";
import { formatPrice, trimTitle } from "../../utilities/helpres";
import { TiDeleteOutline } from "react-icons/ti";
import useDeleteItem from "./useDeleteCart";
import ConfirmDelettion from "../../Components/ConfirmDelettion";

export default function CartItem({ product }) {
  const {
    count,
    price,
    product: {
      brand: { name: brandName },
      category: { name: categoryName },
      id,
      imageCover,
      title,
    },
  } = product;

  const [confirmShow, setConfirmShow] = useState(false);

  const { mutateCount, status } = useUpdateCount();

  const { deleteItem, status: deleteStatus } = useDeleteItem();

  function handleDeletion() {
    setConfirmShow((show) => !show);
    deleteItem(id);
  }

  function handleDecrease() {
    if (count === 1) {
      setConfirmShow((show) => !show);
    } else {
      mutateCount({ id, quantiny: count - 1 });
    }
  }

  function handleIncrease() {
    mutateCount({ id, quantiny: count + 1 });
  }

  return (
    <>
      {confirmShow && (
        <ConfirmDelettion
          deleteStatus={deleteStatus}
          handleDeletion={() => handleDeletion(id)}
          setConfirmShow={setConfirmShow}
        />
      )}

      <tr className="border border-b relative   ">
        <td className="flex xs:ps-1.5 md:ps-3 py-3  items-center ">
          <img
            src={imageCover}
            alt=""
            className="w-24 h-24 rounded-2xl shadow-sm object-cover"
          />
          <div className="xs:px-2 md:px-3">
            <p className="text-red-700 ">{trimTitle(title)}</p>
            <p className="text-sm text-slate-600"> {categoryName}</p>
            <p className="text-sm text-slate-600">{brandName}</p>
          </div>
        </td>
        <td className="text-center w-2/12  xs:hidden md:table-cell  font-bold  ">
          {formatPrice(price)}
        </td>
        <td className="text-center w-1/12">
          {
            <CounterBtn
              quantiny={count}
              status={status}
              increase={handleIncrease}
              decrease={handleDecrease}
            />
          }
        </td>
        <td className="text-center w-2/12 font-bold ps-4 pe-2  ">
          {formatPrice(price * count)}
        </td>
        <td className="w-0">
          <button
            onClick={() => setConfirmShow((show) => !show)}
            className="absolute right-3 top-3   text-red-600"
          >
            <i>
              <TiDeleteOutline />
            </i>
          </button>
        </td>
      </tr>
    </>
  );
}
