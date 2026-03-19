-- Make warehouse_id optional on outbound_order for client portal flow.
-- Client creates order without warehouse; admin assigns warehouse during approval.
ALTER TABLE outbound_order
  ALTER COLUMN warehouse_id DROP NOT NULL;
