import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function History({
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
          d="m9,1c-2.486,0-4.7678,1.1514-6.2614,3.0374l-.1155-.8352c-.0576-.4102-.4443-.6973-.8457-.6396-.4111.0566-.6973.4355-.6406.8457l.4082,2.9448c.0527.3755.374.647.7422.647.0342,0,.0684-.0024.1035-.0068l2.9443-.4067c.4102-.0571.6973-.4355.6406-.8457s-.4287-.6895-.8457-.6406l-1.4572.2012c1.199-1.7278,3.1668-2.8013,5.3273-2.8013,3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-3.5469,0-6.4014-2.7754-6.4971-6.3184-.0117-.4141-.3467-.7461-.7705-.729-.4141.0112-.7402.356-.7295.77.1191,4.3608,3.6318,7.7773,7.9971,7.7773,4.4111,0,8-3.5889,8-8S13.4111,1,9,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.249,12c-.1465,0-.2959-.043-.4258-.1333l-3.25-2.25c-.2021-.1401-.3232-.3706-.3232-.6167v-4.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.8569l2.9268,2.0264c.3408.2358.4258.7031.1895,1.0435-.1455.2104-.3789.3232-.6172.3232Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default History;
