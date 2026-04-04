import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowPerspDoorIn({
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
          d="M15.254 1.74501C14.787 1.41801 14.188 1.33801 13.651 1.53401L10.151 2.80702C9.462 3.05702 8.99899 3.71802 8.99899 4.45102V13.551C8.99899 14.284 9.462 14.945 10.151 15.195L13.651 16.468C13.845 16.538 14.047 16.573 14.248 16.573C14.603 16.573 14.955 16.465 15.253 16.256C15.72 15.929 15.999 15.393 15.999 14.823V3.17801C15.999 2.60801 15.72 2.07201 15.253 1.74501H15.254Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.78 8.46999L7.28 4.96999C6.987 4.67699 6.51199 4.67699 6.21899 4.96999C5.92599 5.26299 5.92599 5.738 6.21899 6.031L8.439 8.251H2.75C2.336 8.251 2 8.587 2 9.001C2 9.415 2.336 9.751 2.75 9.751H8.439L6.21899 11.971C5.92599 12.264 5.92599 12.739 6.21899 13.032C6.36499 13.178 6.55699 13.252 6.74899 13.252C6.94099 13.252 7.13299 13.179 7.27899 13.032L10.779 9.53199C11.072 9.23899 11.072 8.76399 10.779 8.47099L10.78 8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowPerspDoorIn;
