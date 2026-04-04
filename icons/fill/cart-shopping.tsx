import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartShopping({
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
          d="M1.93471 1.02242C1.53288 0.921888 1.12564 1.16614 1.0251 1.56797C0.924574 1.9698 1.16882 2.37704 1.57065 2.47757L2.92222 2.81571C3.01968 2.84001 3.09381 2.92126 3.10866 3.02216C3.43138 5.21599 3.75405 7.40943 4.07678 9.6033C3.16441 9.8903 2.50269 10.7429 2.50269 11.75C2.50269 12.9926 3.51007 14 4.75269 14H15.2527C15.6669 14 16.0027 13.6642 16.0027 13.25C16.0027 12.8358 15.6669 12.5 15.2527 12.5H4.75269C4.3385 12.5 4.00269 12.1642 4.00269 11.75C4.00269 11.3358 4.3385 11 4.75269 11C7.51908 11 10.2857 11 13.0522 11C13.788 11 14.4455 10.5397 14.697 9.848L15.9694 6.34796C16.3843 5.20655 15.5389 4 14.3246 4H4.76865L4.59268 2.80381C4.48956 2.10291 3.97341 1.53215 3.28516 1.36028L1.93471 1.02242Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.00269 17C4.55469 17 5.00269 16.552 5.00269 16C5.00269 15.448 4.55469 15 4.00269 15C3.45069 15 3.00269 15.448 3.00269 16C3.00269 16.552 3.45069 17 4.00269 17Z"
          fill={secondaryfill}
        />
        <path
          d="M14.0027 17C14.5547 17 15.0027 16.552 15.0027 16C15.0027 15.448 14.5547 15 14.0027 15C13.4507 15 13.0027 15.448 13.0027 16C13.0027 16.552 13.4507 17 14.0027 17Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CartShopping;
