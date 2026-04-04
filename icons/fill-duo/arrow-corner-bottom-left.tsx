import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowCornerBottomLeft({
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
          d="M12.75 16.75C12.336 16.75 12 16.414 12 16V7.25C12 6.561 11.439 6 10.75 6H2C1.586 6 1.25 5.664 1.25 5.25C1.25 4.836 1.586 4.5 2 4.5H10.75C12.267 4.5 13.5 5.733 13.5 7.25V16C13.5 16.414 13.164 16.75 12.75 16.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.75 17C12.558 17 12.366 16.927 12.22 16.78L8.71999 13.28C8.42699 12.987 8.42699 12.512 8.71999 12.219C9.01299 11.926 9.488 11.926 9.781 12.219L12.751 15.189L15.721 12.219C16.014 11.926 16.489 11.926 16.782 12.219C17.075 12.512 17.075 12.987 16.782 13.28L13.282 16.78C13.136 16.926 12.944 17 12.752 17H12.75Z"
          fill={fill}
        />
        <path
          d="M5.24999 9.49999C5.05799 9.49999 4.86599 9.42699 4.71999 9.27999L1.21999 5.77999C0.926994 5.48699 0.926994 5.01199 1.21999 4.71899L4.71999 1.21999C5.01299 0.926994 5.488 0.926994 5.781 1.21999C6.074 1.51299 6.074 1.98799 5.781 2.28099L2.811 5.25099L5.781 8.22099C6.074 8.51399 6.074 8.98899 5.781 9.28199C5.635 9.42799 5.443 9.50199 5.251 9.50199L5.24999 9.49999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowCornerBottomLeft;
