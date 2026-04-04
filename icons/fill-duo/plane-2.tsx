import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plane2({
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
          d="M12.0191 2.14696C13.0591 0.988962 14.8579 0.940581 15.9586 2.04127C17.0593 3.14191 17.0111 4.94085 15.8529 5.9809L8.5 12.5845V14.75C8.5 14.9778 8.39643 15.1933 8.21852 15.3357L5.71852 17.3357C5.49339 17.5158 5.18496 17.5509 4.92511 17.426C4.66526 17.3011 4.5 17.0383 4.5 16.75V13.5H1.25C0.961696 13.5 0.698912 13.3347 0.574022 13.0749C0.449132 12.815 0.484246 12.5066 0.664348 12.2815L2.66435 9.78148C2.80668 9.60357 3.02216 9.5 3.25 9.5H5.4155L12.0191 2.14696Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.1881 4.18575L2.59115 3.25556C2.33297 3.22395 2.07684 3.32837 1.91435 3.53148L1.09375 4.55859C0.948525 4.74012 0.89569 4.97874 0.950705 5.2046C1.00572 5.43047 1.16237 5.61806 1.3748 5.71248L6.69392 8.07649L10.1881 4.18575Z"
          fill={fill}
        />
        <path
          d="M9.94167 11.2898L12.3085 16.6152C12.4029 16.8277 12.5905 16.9843 12.8164 17.0393C13.0423 17.0944 13.2809 17.0415 13.4624 16.8963L14.4685 16.0857C14.6716 15.9232 14.7761 15.667 14.7444 15.4088L13.8143 7.81182L9.94167 11.2898Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Plane2;
