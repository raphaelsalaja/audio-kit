import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FxBlur({
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
          d="M6.5 3C7.052 3 7.5 2.552 7.5 2C7.5 1.448 7.052 1 6.5 1C5.948 1 5.5 1.448 5.5 2C5.5 2.552 5.948 3 6.5 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 3C12.052 3 12.5 2.552 12.5 2C12.5 1.448 12.052 1 11.5 1C10.948 1 10.5 1.448 10.5 2C10.5 2.552 10.948 3 11.5 3Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 7.5C16.552 7.5 17 7.052 17 6.5C17 5.948 16.552 5.5 16 5.5C15.448 5.5 15 5.948 15 6.5C15 7.052 15.448 7.5 16 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 12.5C16.552 12.5 17 12.052 17 11.5C17 10.948 16.552 10.5 16 10.5C15.448 10.5 15 10.948 15 11.5C15 12.052 15.448 12.5 16 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 17C12.052 17 12.5 16.552 12.5 16C12.5 15.448 12.052 15 11.5 15C10.948 15 10.5 15.448 10.5 16C10.5 16.552 10.948 17 11.5 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 17C7.052 17 7.5 16.552 7.5 16C7.5 15.448 7.052 15 6.5 15C5.948 15 5.5 15.448 5.5 16C5.5 16.552 5.948 17 6.5 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 12.5C2.552 12.5 3 12.052 3 11.5C3 10.948 2.552 10.5 2 10.5C1.448 10.5 1 10.948 1 11.5C1 12.052 1.448 12.5 2 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 7.5C2.552 7.5 3 7.052 3 6.5C3 5.948 2.552 5.5 2 5.5C1.448 5.5 1 5.948 1 6.5C1 7.052 1.448 7.5 2 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 11.5C4.75 10.5338 5.53381 9.75 6.5 9.75C7.46619 9.75 8.25 10.5338 8.25 11.5C8.25 12.4662 7.46619 13.25 6.5 13.25C5.53381 13.25 4.75 12.4662 4.75 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 6.5C4.75 5.53381 5.53381 4.75 6.5 4.75C7.46619 4.75 8.25 5.53381 8.25 6.5C8.25 7.46619 7.46619 8.25 6.5 8.25C5.53381 8.25 4.75 7.46619 4.75 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 11.5C9.75 10.5338 10.5338 9.75 11.5 9.75C12.4662 9.75 13.25 10.5338 13.25 11.5C13.25 12.4662 12.4662 13.25 11.5 13.25C10.5338 13.25 9.75 12.4662 9.75 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 6.5C9.75 5.53381 10.5338 4.75 11.5 4.75C12.4662 4.75 13.25 5.53381 13.25 6.5C13.25 7.46619 12.4662 8.25 11.5 8.25C10.5338 8.25 9.75 7.46619 9.75 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FxBlur;
