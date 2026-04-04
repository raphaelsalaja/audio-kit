import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bucket3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.5,2.5c0-1.718-2.851-2.5-5.5-2.5S.5.782.5,2.5c0,.022.004.08.005.087l.856,7.263c0,1.485,2.33,2.15,4.639,2.15s4.639-.665,4.634-2.062l.861-7.35c0-.008.005-.065.005-.087Zm-5.5-1c2.506,0,3.883.73,3.998.972l-.002.014c-.12.287-1.496,1.014-3.996,1.014-2.481,0-3.852-.714-3.99-.964l-.003-.026c.129-.289,1.502-1.01,3.993-1.01Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Bucket3;
