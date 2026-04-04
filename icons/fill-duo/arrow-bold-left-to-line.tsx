import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftToLine({
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
          d="M1.75 3C1.336 3 1 3.336 1 3.75V14.25C1 14.664 1.336 15 1.75 15C2.164 15 2.5 14.664 2.5 14.25V3.75C2.5 3.336 2.164 3 1.75 3Z"
          fill={fill}
        />
        <path
          d="M15.25 6.50007H12V4.97907C12 4.50707 11.739 4.08107 11.319 3.86607C10.898 3.65207 10.4 3.69007 10.017 3.96707L4.46097 7.98707C4.13697 8.22107 3.94397 8.60007 3.94397 9.00007C3.94397 9.40007 4.13797 9.77807 4.46097 10.0121L10.017 14.0331C10.235 14.1911 10.492 14.2711 10.749 14.2711C10.943 14.2711 11.138 14.2261 11.318 14.1341C11.738 13.9191 11.999 13.4931 11.999 13.0211V11.5001H15.249C16.214 11.5001 16.999 10.7151 16.999 9.75007V8.25007C16.999 7.28507 16.215 6.50007 15.25 6.50007Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldLeftToLine;
