import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SignboardCheck({
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
          d="M6.1987 12L4.02071 2.92503C3.9671 2.70166 4.01881 2.46605 4.16103 2.28566C4.30325 2.10527 4.52029 2 4.75 2H4.7659C4.42059 1.99234 4.1046 2.22543 4.02071 2.57496L1.02071 15.075C0.924043 15.4777 1.17219 15.8826 1.57497 15.9793C1.97775 16.0759 2.38262 15.8278 2.47929 15.425L3.3013 12H6.1987Z"
          fill={fill}
        />
        <path
          d="M4.16103 2.28566C4.30325 2.10527 4.52029 2 4.75 2H13.25C13.5968 2 13.8984 2.23776 13.9793 2.57497L16.2593 12.075L16.9793 15.075C17.076 15.4777 16.8278 15.8826 16.425 15.9793C16.0223 16.0759 15.6174 15.8278 15.5207 15.425L14.9387 13L7.9813 13L8.47929 15.075C8.57596 15.4778 8.3278 15.8826 7.92503 15.9793C7.52225 16.076 7.11737 15.8278 7.02071 15.425L6.30071 12.425L4.02071 2.92503C3.9671 2.70166 4.01881 2.46605 4.16103 2.28566Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.416 5.12598C12.7607 5.35575 12.8538 5.8214 12.624 6.16604L10.124 9.91604C9.99278 10.1129 9.7763 10.2363 9.54001 10.249C9.30372 10.2616 9.07532 10.1619 8.92384 9.98016L7.67384 8.48016C7.40866 8.16195 7.45166 7.68903 7.76987 7.42385C8.08807 7.15868 8.561 7.20167 8.82617 7.51988L9.43314 8.24824L11.376 5.33399C11.6057 4.98935 12.0714 4.89622 12.416 5.12598Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SignboardCheck;
