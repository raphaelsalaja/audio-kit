import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lightbulb2({
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
          d="M7.53033 5.71967C7.23744 5.42678 6.76256 5.42678 6.46967 5.71967C6.17678 6.01256 6.17678 6.48744 6.46967 6.78033L8.25 8.56066V11.25C8.25 11.6642 8.58579 12 9 12C9.41421 12 9.75 11.6642 9.75 11.25V8.56066L11.5303 6.78033C11.8232 6.48744 11.8232 6.01256 11.5303 5.71967C11.2374 5.42678 10.7626 5.42678 10.4697 5.71967L9 7.18934L7.53033 5.71967Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.75 6.74999C14.75 3.17005 11.4753 0.35484 7.76888 1.12881L7.7687 1.12885C5.64967 1.57093 3.94796 3.23953 3.42527 5.317C3.35187 5.60873 3.30308 5.906 3.27586 6.19373C3.05788 8.49859 4.20721 10.5515 6.00003 11.6506V14.25C6.00003 15.7692 7.23081 17 8.75002 17H9.25002C10.7692 17 12 15.7692 12 14.25V11.6506C13.6463 10.6414 14.75 8.82737 14.75 6.74999ZM8.07535 2.59716C10.8329 2.02126 13.25 4.104 13.25 6.74999C13.25 8.37376 12.3368 9.78398 10.9919 10.5H7.0081C5.5504 9.7239 4.59908 8.13374 4.7692 6.33497C4.78985 6.11662 4.82662 5.8949 4.87993 5.68299C5.26509 4.15216 6.52871 2.91978 8.07517 2.5972L8.07535 2.59716Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Lightbulb2;
