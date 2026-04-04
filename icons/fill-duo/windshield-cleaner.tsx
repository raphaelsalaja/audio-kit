import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindshieldCleaner({
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
          d="M1.50001 7.79654V15.25C1.50001 15.4954 1.6201 15.7254 1.82156 15.8656C2.02301 16.0058 2.28033 16.0386 2.5105 15.9533C6.84241 14.3489 11.1576 14.3489 15.4895 15.9533C15.7197 16.0386 15.977 16.0058 16.1785 15.8656C16.3799 15.7254 16.5 15.4954 16.5 15.25V7.79654C16.5004 7.78103 16.5 7.76552 16.5 7.75C16.5 7.35577 16.1609 7.12877 15.8094 7.00231C11.2749 5.37125 6.7251 5.37125 2.19063 7.00231C1.82755 7.13291 1.50001 7.35577 1.50001 7.75C1.50001 7.76552 1.49964 7.78103 1.50001 7.79654Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.875 1C5.28679 1 4 2.28679 4 3.875C4 4.28921 4.33579 4.625 4.75 4.625C5.16421 4.625 5.5 4.28921 5.5 3.875C5.5 3.11521 6.11521 2.5 6.875 2.5C7.63479 2.5 8.25 3.11521 8.25 3.875V9.875C8.25 10.2892 8.58579 10.625 9 10.625C9.41421 10.625 9.75 10.2892 9.75 9.875V3.875C9.75 3.11521 10.3652 2.5 11.125 2.5C11.8848 2.5 12.5 3.11521 12.5 3.875C12.5 4.28921 12.8358 4.625 13.25 4.625C13.6642 4.625 14 4.28921 14 3.875C14 2.28679 12.7132 1 11.125 1C10.283 1 9.52573 1.36166 9 1.93817C8.47427 1.36166 7.71699 1 6.875 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WindshieldCleaner;
