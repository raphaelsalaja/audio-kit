import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextColor({
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
          d="M8.727 1C8.41745 1 8.1397 1.19018 8.02776 1.47878L4.73074 9.97878C4.58095 10.365 4.77258 10.7994 5.15876 10.9492C5.54494 11.099 5.97943 10.9074 6.12922 10.5212L6.91322 8.5H11.0868L11.8707 10.5212C12.0205 10.9074 12.455 11.099 12.8412 10.9492C13.2274 10.7994 13.419 10.365 13.2692 9.97878L9.97222 1.47878C9.86028 1.19018 9.58253 1 9.27298 1H8.727ZM10.5049 7L8.99999 3.12014L7.49505 7H10.5049Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 14.75C1 13.7868 1.78281 13 2.75 13H15.25C16.2172 13 17 13.7868 17 14.75V15.25C17 16.2132 16.2172 17 15.25 17H2.75C1.78281 17 1 16.2132 1 15.25V14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextColor;
