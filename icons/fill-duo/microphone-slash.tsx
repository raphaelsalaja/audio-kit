import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MicrophoneSlash({
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
          d="M12.4986 5.50141V4.63487C12.4986 2.62816 10.9323 1.00134 8.99999 1.00134C7.0677 1.00134 5.50142 2.62816 5.50142 4.63487V7.86258C5.50142 9.13807 6.1342 10.2601 7.09155 10.9084L12.4986 5.50141Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.60306 14.5789C7.12576 14.7694 7.67757 14.8993 8.25 14.9603V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V14.9603C13.2635 14.5861 16 11.6128 16 8C16 7.58579 15.6642 7.25 15.25 7.25C14.8358 7.25 14.5 7.58579 14.5 8C14.5 11.0378 12.0378 13.5 9 13.5C8.59169 13.5 8.19377 13.4555 7.81084 13.3711L6.60306 14.5789Z"
          fill={fill}
        />
        <path
          d="M5.64291 12.3571C4.33951 11.3514 3.5 9.77381 3.5 8C3.5 7.58579 3.16421 7.25 2.75 7.25C2.33579 7.25 2 7.58579 2 8C2 10.1878 3.00349 12.1411 4.57533 13.4247L5.64291 12.3571Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MicrophoneSlash;
