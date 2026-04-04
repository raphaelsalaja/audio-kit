import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StorageUnit({
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
          d="M4 8.75C4 7.23079 5.23079 6 6.75 6H11.25C12.7692 6 14 7.23079 14 8.75V13.25C14 14.7692 12.7692 16 11.25 16H6.75C5.23079 16 4 14.7692 4 13.25V8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 6V9.75C9.75 10.1642 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.1642 8.25 9.75V6H9.75Z"
          fill={fill}
        />
        <path
          d="M8.67393 1.07459C8.87994 0.975138 9.12006 0.975138 9.32606 1.07459L16.5761 4.57459C16.9491 4.75467 17.1055 5.20304 16.9254 5.57606C16.7453 5.94908 16.297 6.10549 15.9239 5.92541L9 2.58282L2.07606 5.92541C1.70304 6.10549 1.25466 5.94908 1.07458 5.57606C0.894504 5.20304 1.05091 4.75467 1.42393 4.57459L8.67393 1.07459Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 16H14.75C15.9922 16 17 14.9922 17 13.75V10.25C17 9.00779 15.9922 8 14.75 8H13.8966C13.9639 8.2384 14 8.48998 14 8.75V13.25C14 14.7692 12.7692 16 11.25 16Z"
          fill={fill}
        />
        <path
          d="M4.10344 8C4.03606 8.2384 4 8.48998 4 8.75V13.25C4 14.7692 5.23079 16 6.75 16H3.25C2.00779 16 1 14.9922 1 13.75V10.25C1 9.00779 2.00779 8 3.25 8H4.10344Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StorageUnit;
