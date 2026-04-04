import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsBoldOppositeDirection({
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
          d="M2.03862 6.99953L6.00002 2.86622V4.75001C6.00002 5.16411 6.33592 5.50001 6.75002 5.50001H8.75002C9.16412 5.50001 9.50002 5.16411 9.50002 4.75001C9.50002 4.33591 9.16412 4.00001 8.75002 4.00001H7.50002V2.24412C7.50002 1.73092 7.19292 1.27583 6.71732 1.08443C6.24222 0.894025 5.70512 1.00773 5.34772 1.37883L0.900424 6.0189C0.373524 6.5687 0.373524 7.43001 0.900424 7.97981L2.95852 10.1268C3.10602 10.2806 3.30272 10.3578 3.50002 10.3578C3.68652 10.3578 3.87352 10.2885 4.01902 10.1493C4.31782 9.86271 4.32812 9.38762 4.04152 9.08882L2.03862 6.99953Z"
          fill={secondaryfill}
        />
        <path
          d="M17.0996 10.019L12.6523 5.3789C12.2963 5.0088 11.7582 4.8921 11.2822 5.0845C10.8071 5.2754 10.5 5.73049 10.5 6.24319V7.99911H7.25C6.2852 7.99911 5.5 8.78431 5.5 9.74911V12.2491C5.5 13.2139 6.2852 13.9991 7.25 13.9991H10.5V15.755C10.5 16.2682 10.8071 16.7233 11.2827 16.9147C11.4355 16.9762 11.5947 17.006 11.7519 17.006C12.0849 17.006 12.4101 16.8722 12.6523 16.6203L17.0996 11.9802C17.6265 11.4304 17.6265 10.5688 17.0996 10.019Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsBoldOppositeDirection;
