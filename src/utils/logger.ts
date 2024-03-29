/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { format, transports, createLogger } from 'winston';

const colorizer = format.colorize();
const outputFormat = format.printf((info) => {
  const { timestamp, label, message, level } = info;
  return `${colorizer.colorize(level, timestamp)} ${colorizer.colorize(
    level,
    label
  )} ${colorizer.colorize(level, message)}`;
});

export function initLogger(file: string) {
  const parsed = file.split('/');
  const label = parsed.pop() || '';
  return createLogger({
    format: format.combine(
      format.label({ label: `[${label}]:` }),
      format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
      outputFormat
    ),
    exitOnError: true,
    transports: [new transports.Console()],
  });
}
