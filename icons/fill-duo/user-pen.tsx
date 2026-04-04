import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPen({
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
          d="M16.3653 10.9707L16.0299 10.6353C15.3697 9.97374 14.2169 9.97424 13.5548 10.6348L10.3936 13.7959C10.313 13.8765 10.252 13.9741 10.2149 14.0815L9.29396 16.7524C9.20016 17.0239 9.26956 17.3247 9.47266 17.5273C9.61576 17.6704 9.80716 17.747 10.003 17.747C10.085 17.747 10.1676 17.7338 10.2476 17.706L12.9185 16.7851C13.0259 16.748 13.1236 16.687 13.2041 16.6064L16.3652 13.4453C16.6958 13.1147 16.8779 12.6753 16.8779 12.208C16.8779 11.7402 16.6959 11.3008 16.3653 10.9707Z"
          fill={fill}
        />
        <path
          d="M12.2614 9.80675C11.2884 9.29183 10.1788 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.02022 16.5488 6.28427 16.8419 7.75333 16.953C7.76248 16.5615 7.88801 16.2212 7.92013 16.1342L8.79679 13.5925C8.90811 13.2702 9.09149 12.9766 9.3329 12.7352L12.2614 9.80675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserPen;
