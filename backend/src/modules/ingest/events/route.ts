import { FastifyInstance, FastifyPluginOptions } from "fastify";

// Example ingest 

// {
//   "service": "auth-service",        // which service emitted the event
//   "event": "failed_login",          // type of event (see below)
//   "count": 7,                       // optional: how many occurrences
//   "latency_ms": 312,                // optional: performance metric
//   "cpu_pct": 82.5,                  // optional: resource metric
//   "source_ip": "203.0.113.24",      // optional: origin of the event
//   "message": "User failed 7 login attempts", // optional: freeform detail
//   "unique_id": "uuid-1",      // required, unique per event
//   "ts": "2025-10-06T20:20:00Z"      // optional: timestamp (ISO 8601)
// }


// | Category      | Event                 | Typical Fields         | Description                       |
// | ------------- | --------------------- | ---------------------- | --------------------------------- |
// | **Auth**      | `failed_login`        | `count`, `source_ip`   | Multiple failed logins detected   |
// |               | `suspicious_activity` | `source_ip`, `message` | Unexpected login pattern          |

// | **Payments**  | `transaction_error`   | `count`, `latency_ms`  | Repeated payment gateway failures |
// |               | `latency_spike`       | `latency_ms`           | Slow external API response        |

// | **System**    | `cpu_high`            | `cpu_pct`              | Sustained high CPU                |
// |               | `memory_warning`      | `memory_pct`           | High memory consumption           |

// | **Inventory** | `stock_mismatch`      | `count`, `message`     | Discrepancy between systems       |
// |               | `api_error`           | `count`, `latency_ms`  | 5xx errors or timeouts            |


interface ingest {
    service: string;
    event: string;
    count: number;
    latency_ms: number;
    cpu_pct: number;
    mem_pct: number;
    source_ip: string;
    message: string;
    unique_id: string;
    ts: string;
    

}


function route(fastify: FastifyInstance, _options:FastifyPluginOptions) {
    return {
        
    }
}