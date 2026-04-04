import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClothesHanger({
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
          d="M9.41189 3.55354C8.39496 3.29127 7.49999 4.04188 7.49999 5.00001C7.49999 5.41422 7.1642 5.75001 6.74999 5.75001C6.33577 5.75001 5.99999 5.41422 5.99999 5.00001C5.99999 3.08234 7.80002 1.58874 9.78649 2.10107C10.8088 2.36475 11.6352 3.19109 11.8988 4.21352C12.3419 5.93166 11.2845 7.51032 9.74988 7.90545V9.04201C9.74988 9.30255 9.61466 9.54442 9.39272 9.68089L2.57243 13.8747C2.72069 14.2413 3.08007 14.5 3.49988 14.5H14.4999C14.9124 14.5 15.2666 14.2502 15.4194 13.8937L11.0066 11.4146C10.6455 11.2117 10.5172 10.7545 10.7201 10.3934C10.923 10.0322 11.3802 9.90395 11.7413 10.1068L16.6172 12.8461C16.8536 12.9789 16.9999 13.2289 16.9999 13.5C16.9999 14.8807 15.8806 16 14.4999 16H3.49988C2.11916 16 0.999878 14.8807 0.999878 13.5C0.999878 13.2395 1.13509 12.9976 1.35703 12.8611L8.24988 8.62273V7.25001C8.24988 6.83579 8.58566 6.50001 8.99988 6.50001C9.95802 6.50001 10.7086 5.60503 10.4464 4.58811C10.319 4.09434 9.90553 3.68086 9.41189 3.55354Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClothesHanger;
