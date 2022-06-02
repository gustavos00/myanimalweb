import { ReactNode } from "react";
import FilterInput from "../FilterInput";

import { Tr } from "react-super-responsive-table";

import * as S from "./styles";

interface TableProps {
  header: Array<any>;
  children: ReactNode;
  title: string
}

function Table({ children, header, title}: TableProps) {
  return (
    <S.DataContent>
      <h1>{title}</h1>
      <S.TableContent>
        <S.STable>
          <S.STHead>
            <Tr>
              {header.map((element, index) => (
                <S.STh key={index}>{element}</S.STh>
              ))}
            </Tr>
          </S.STHead>
          <S.STBody>
            <>{children}</>
          </S.STBody>
        </S.STable>
      </S.TableContent>
    </S.DataContent>
  );
}

export default Table;
