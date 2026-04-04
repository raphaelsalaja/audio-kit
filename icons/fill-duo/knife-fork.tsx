import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KnifeFork({
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
          d="M15.144 5.973L14.999 2.221C14.983 1.807 14.683 1.484 14.221 1.5C13.808 1.516 13.485 1.864 13.501 2.278L13.646 6.03C13.666 6.55 13.478 7.043 13.117 7.418C12.396 8.168 11.105 8.168 10.385 7.418C10.024 7.043 9.836 6.55 9.856 6.03L10.001 2.278C10.018 1.864 9.694 1.516 9.281 1.5C8.821 1.465 8.518 1.806 8.503 2.221L8.358 5.973C8.322 6.904 8.658 7.787 9.304 8.458C9.773 8.945 10.36 9.267 11.001 9.411V15.75C11.001 16.164 11.337 16.5 11.751 16.5C12.165 16.5 12.501 16.164 12.501 15.75V9.411C13.142 9.267 13.73 8.945 14.198 8.458C14.844 7.787 15.18 6.904 15.144 5.973Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.96883 1.53264C6.2844 1.6289 6.5 1.92008 6.5 2.25C6.5 6.75 6.5 11.25 6.5 15.75C6.5 16.1642 6.16421 16.5 5.75 16.5C5.33579 16.5 5 16.1642 5 15.75V12.5947L2.76163 10.6742C2.59028 10.5272 2.49427 10.3108 2.50026 10.0851C2.53593 8.74126 2.75732 6.81111 3.61629 4.67786C4.07771 3.53535 4.62026 2.58571 5.1277 1.83138C5.31185 1.55763 5.65327 1.43637 5.96883 1.53264Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 1.5C12.1642 1.5 12.5 1.83579 12.5 2.25V5.75C12.5 6.16421 12.1642 6.5 11.75 6.5C11.3358 6.5 11 6.16421 11 5.75V2.25C11 1.83579 11.3358 1.5 11.75 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default KnifeFork;
