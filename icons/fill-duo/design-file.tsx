import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFile({
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
          d="M4.75 1C3.23079 1 2 2.23079 2 3.75V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.664C16 6.20014 15.816 5.75536 15.4873 5.42667L11.574 1.5133C11.2449 1.18293 10.7983 1 10.336 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 10C12.605 10 13.5 9.105 13.5 8C13.5 6.895 12.605 6 11.5 6C10.395 6 9.5 6.895 9.5 8C9.5 9.105 10.395 10 11.5 10Z"
          fill={fill}
        />
        <path
          d="M8.60001 10H6.89999C6.40299 10 6 10.403 6 10.9V12.6C6 13.097 6.40299 13.5 6.89999 13.5H8.60001C9.09701 13.5 9.5 13.097 9.5 12.6V10.9C9.5 10.403 9.09701 10 8.60001 10Z"
          fill={fill}
        />
        <path
          d="M8.40199 7.64801C8.52599 7.43101 8.525 7.16199 8.399 6.94699L7.069 4.667C6.818 4.237 6.10999 4.239 5.86099 4.667L4.531 6.94602C4.405 7.16202 4.403 7.43001 4.528 7.64801C4.652 7.86501 4.88499 8 5.13499 8H7.794C8.044 8 8.27799 7.86501 8.40199 7.64801Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DesignFile;
