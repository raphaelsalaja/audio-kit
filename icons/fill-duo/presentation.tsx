import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Presentation({
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
          d="M6.5 8.5H10.25C10.6642 8.5 11 8.16421 11 7.75C11 7.33579 10.6642 7 10.25 7H4.25C2.73079 7 1.5 8.23079 1.5 9.75V16.25C1.5 16.6642 1.83579 17 2.25 17L5.75 17C5.94891 17 6.13968 16.921 6.28033 16.7803C6.42098 16.6397 6.5 16.4489 6.5 16.25V8.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 4.00003C2 2.89597 2.89532 2.00003 4 2.00003C5.10468 2.00003 6 2.89597 6 4.00003C6 5.10409 5.10468 6.00003 4 6.00003C2.89532 6.00003 2 5.10409 2 4.00003Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.16309 5.5H10.25C11.4926 5.5 12.5 6.50736 12.5 7.75C12.5 8.99264 11.4926 10 10.25 10H8V13.5H13.75C15.2692 13.5 16.5 12.2692 16.5 10.75V5.75C16.5 4.23079 15.2692 3 13.75 3H7.35501C7.44934 3.31689 7.5 3.65255 7.5 4C7.5 4.53671 7.37912 5.04531 7.16309 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.9342 13.5H12.4942L13.2211 16.044C13.3349 16.4422 13.1043 16.8574 12.706 16.9712C12.3077 17.0849 11.8926 16.8543 11.7788 16.4561L10.9342 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Presentation;
