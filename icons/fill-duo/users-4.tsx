import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users4({
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
          d="M0.60935 12.4813C1.07604 10.3473 2.97508 8.74951 5.25003 8.74951C7.52499 8.74951 9.42401 10.3473 9.89071 12.4813C10.0939 13.4114 9.48096 14.2483 8.6659 14.4945C7.78993 14.7591 6.62599 15.0005 5.25003 15.0005C3.87451 15.0005 2.71041 14.7602 1.83336 14.4942C1.02087 14.2481 0.406232 13.413 0.60935 12.4813Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.7257 14.8253C11.3315 14.931 12.0101 15.0005 12.75 15.0005C14.1259 15.0005 15.2899 14.7591 16.1659 14.4945C16.9809 14.2483 17.5938 13.4114 17.3907 12.4813C16.924 10.3473 15.0249 8.74951 12.75 8.74951C11.7681 8.74951 10.8563 9.04714 10.0994 9.55704C10.7055 10.302 11.1434 11.1893 11.3559 12.1608C11.5804 13.1888 11.288 14.1272 10.7257 14.8253Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.25 7.25049C6.49267 7.25049 7.5 6.24361 7.5 5.00049C7.5 3.75736 6.49267 2.75049 5.25 2.75049C4.00733 2.75049 3 3.75736 3 5.00049C3 6.24361 4.00733 7.25049 5.25 7.25049Z"
          fill={fill}
        />
        <path
          d="M12.75 7.25049C13.9927 7.25049 15 6.24361 15 5.00049C15 3.75736 13.9927 2.75049 12.75 2.75049C11.5073 2.75049 10.5 3.75736 10.5 5.00049C10.5 6.24361 11.5073 7.25049 12.75 7.25049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Users4;
