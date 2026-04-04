import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxShield({
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
          d="M8.25 1.5H6.241C5.189 1.5 4.245 2.086 3.777 3.029L3.429 3.732C3.847 3.594 4.286 3.501 4.75 3.501H8.25V1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.224 3.028C13.756 2.086 12.811 1.5 11.759 1.5H9.75V3.5H13.25C13.714 3.5 14.153 3.593 14.572 3.731L14.224 3.028Z"
          fill={secondaryfill}
        />
        <path
          d="M9.5 14.94V12C9.5 11.12 10.018 10.316 10.819 9.952L13.569 8.702C13.862 8.568 14.176 8.5 14.5 8.5C14.824 8.5 15.138 8.568 15.432 8.702L16 8.96V7.75C16 6.233 14.767 5 13.25 5H9.75V7.75C9.75 8.164 9.414 8.5 9 8.5C8.586 8.5 8.25 8.164 8.25 7.75V5H4.75C3.233 5 2 6.233 2 7.75V13.25C2 14.767 3.233 16 4.75 16H9.656C9.557 15.675 9.5 15.322 9.5 14.94Z"
          fill={fill}
        />
        <path
          d="M17.5605 11.3175L14.8105 10.0675C14.6132 9.9777 14.3867 9.9777 14.1894 10.0675L11.4395 11.3175C11.1719 11.4386 11 11.7062 11 12.0001V14.9405C11 16.9903 13.9604 17.878 14.2979 17.9727C14.3638 17.9913 14.4322 18 14.5 18C14.5678 18 14.6362 17.9912 14.7021 17.9727C15.0395 17.878 18 16.9903 18 14.9405V12.0001C18 11.7062 17.8281 11.4386 17.5605 11.3175ZM16.5 14.9405C16.5 15.5489 15.3726 16.1759 14.5 16.4659V11.5743L16.5 12.4835V14.9405Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BoxShield;
