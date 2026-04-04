import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Split2({
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
          d="M7 6.75C7 6.061 7.561 5.5 8.25 5.5H15.25V4H8.25C6.733 4 5.5 5.233 5.5 6.75V8.25H1.75C1.336 8.25 1 8.586 1 9C1 9.414 1.336 9.75 1.75 9.75H5.5V11.25C5.5 12.767 6.733 14 8.25 14H15.25V12.5H8.25C7.561 12.5 7 11.939 7 11.25V6.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5 16.75C12.308 16.75 12.116 16.6771 11.97 16.5301C11.677 16.2371 11.677 15.762 11.97 15.469L14.19 13.249L11.97 11.0291C11.677 10.7361 11.677 10.261 11.97 9.96804C12.263 9.67504 12.738 9.67504 13.031 9.96804L15.781 12.718C16.074 13.011 16.074 13.4861 15.781 13.7791L13.031 16.5291C12.885 16.6751 12.693 16.749 12.501 16.749L12.5 16.75Z"
          fill={fill}
        />
        <path
          d="M12.5 8.25002C12.308 8.25002 12.116 8.17705 11.97 8.03005C11.677 7.73705 11.677 7.26202 11.97 6.96902L14.19 4.74905L11.97 2.52908C11.677 2.23608 11.677 1.76104 11.97 1.46804C12.263 1.17504 12.738 1.17504 13.031 1.46804L15.781 4.21804C16.074 4.51104 16.074 4.98608 15.781 5.27908L13.031 8.02908C12.885 8.17508 12.693 8.24905 12.501 8.24905L12.5 8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Split2;
