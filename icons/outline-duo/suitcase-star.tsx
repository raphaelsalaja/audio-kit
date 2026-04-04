import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseStar({
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
          d="M9.457 14.7983L8.67969 14.0405C8.06929 13.4453 7.8467 12.5385 8.1113 11.7304C8.3759 10.9135 9.0722 10.3261 9.9277 10.2026L11.0019 10.0464L11.4814 9.07281C11.8554 8.31841 12.6289 7.85211 13.5 7.85211C14.3711 7.85211 15.1445 8.3184 15.5166 9.0694L15.6034 9.24548L16.25 9.0647V6.75C16.25 5.645 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H9.37979L9.457 14.7983Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 10.068L14.504 12.103L16.75 12.429L15.125 14.013L15.509 16.25L13.5 15.194L11.491 16.25L11.875 14.013L10.25 12.429L12.496 12.103L13.5 10.068Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.86133V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.63531"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 10.068L14.504 12.103L16.75 12.429L15.125 14.013L15.509 16.25L13.5 15.194L11.491 16.25L11.875 14.013L10.25 12.429L12.496 12.103L13.5 10.068Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SuitcaseStar;
