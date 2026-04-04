import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrinUpsideDown({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.10301 7.24369C6.25701 7.39769 6.46901 7.4647 6.68601 7.4327C8.21801 7.1937 9.79801 7.1947 11.324 7.4337C11.538 7.4657 11.745 7.3987 11.896 7.2487C12.05 7.0957 12.123 6.8727 12.089 6.6507C11.859 5.1397 10.531 3.99969 9.00001 3.99969C7.46901 3.99969 6.14001 5.1407 5.91101 6.6537C5.87801 6.8697 5.95001 7.09069 6.10301 7.24369Z"
          fill={fill}
        />
        <path
          d="M12 11.0007C12.552 11.0007 13 10.553 13 10.0007C13 9.4484 12.552 9.0007 12 9.0007C11.448 9.0007 11 9.4484 11 10.0007C11 10.553 11.448 11.0007 12 11.0007Z"
          fill={fill}
        />
        <path
          d="M6 11.0007C6.552 11.0007 7 10.553 7 10.0007C7 9.4484 6.552 9.0007 6 9.0007C5.448 9.0007 5 9.4484 5 10.0007C5 10.553 5.448 11.0007 6 11.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceGrinUpsideDown;
