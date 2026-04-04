import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartSparkle({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.743,7.769l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.104-.305-.257-.356h.001Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.3737,9.4751c.382-.8677.6263-1.8193.6263-2.8662.008-2.1199-1.704-3.8459-3.826-3.8589-1.277.0161-2.464.6599-3.174,1.72-.709-1.061-1.896-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.826,3.8589,0,4.8262,4.959,7.7942,6.5291,8.613.278.1453.5985.1489.8821.0222"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.658,12.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263.421c-.204.068-.342.259-.342.474s.138.406.342.474l1.263.421.421,1.263c.068.204.26.342.475.342s.406-.138.475-.342l.421-1.263,1.263-.421c.204-.068.342-.259.342-.474s-.138-.406-.342-.474h-.001Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle
          cx="12.25"
          cy="6.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HeartSparkle;
