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
          d="M4.583 13.417L5.649 12.351C4.345 11.345 3.5 9.771 3.5 8C3.5 7.586 3.164 7.25 2.75 7.25C2.336 7.25 2 7.586 2 8C2 10.185 3.01 12.133 4.583 13.417Z"
          fill={secondaryfill}
        />
        <path
          d="M6.721 11.279L13 5C13 2.794 11.206 1 9 1C6.794 1 5 2.794 5 5V8C5 9.358 5.683 10.556 6.721 11.279Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.9998 8C15.9998 7.58579 15.664 7.25 15.2498 7.25C14.8356 7.25 14.4998 7.58579 14.4998 8C14.4998 11.0378 12.0376 13.5 8.99979 13.5C8.71828 13.5 8.44255 13.479 8.17363 13.4385C7.76403 13.3769 7.38203 13.659 7.32041 14.0686C7.2588 14.4782 7.5409 14.8602 7.9505 14.9219C8.04964 14.9368 8.14941 14.9496 8.24979 14.9603V16.25C8.24979 16.6642 8.58557 17 8.99979 17C9.414 17 9.74979 16.6642 9.74979 16.25V14.9603C13.2633 14.5861 15.9998 11.6128 15.9998 8Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MicrophoneSlash;
