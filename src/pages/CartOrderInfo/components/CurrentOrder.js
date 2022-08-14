import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function CurrentOrder() {
  // local test

  // local test

  return (
    <>
      <h3>商品明細</h3>
      <TableContainer
        component={Paper}
        sx={{ minWidth: 700, maxWidth: 950, margin: 'auto' }}
      >
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center">商品ID</TableCell>
              <TableCell align="center">商品圖片</TableCell>
              <TableCell align="center">商品名稱</TableCell>
              <TableCell align="center">單價</TableCell>
              <TableCell align="center">數量</TableCell>
              <TableCell align="center">小計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell align="center">{row.qty}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                <TableCell align="center">{ccyFormat(row.price)}</TableCell>
                <TableCell align="center">{row.qty}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                <TableCell align="center">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ color: 'text.primary' }}>
          <TableRow>
            <TableCell colSpan={2}>目前價格</TableCell>
            <TableCell align="center">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>優惠</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="center">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>總金額</TableCell>
            <TableCell align="center">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>

    </>
  );
}

export default CurrentOrder;
